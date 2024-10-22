// Thank you, Chat GPT
/*
 ::::::::   ::::::::  ::::    :::  :::::::: ::::::::::: :::::::::      :::     ::::::::::: ::::    ::: :::::::::::
:+:    :+: :+:    :+: :+:+:   :+: :+:    :+:    :+:     :+:    :+:   :+: :+:       :+:     :+:+:   :+:     :+:
+:+        +:+    +:+ :+:+:+  +:+ +:+           +:+     +:+    +:+  +:+   +:+      +:+     :+:+:+  +:+     +:+
+#+        +#+    +:+ +#+ +:+ +#+ +#++:++#++    +#+     +#++:++#:  +#++:++#++:     +#+     +#+ +:+ +#+     +#+
+#+        +#+    +#+ +#+  +#+#+#        +#+    +#+     +#+    +#+ +#+     +#+     +#+     +#+  +#+#+#     +#+
#+#    #+# #+#    #+# #+#   #+#+# #+#    #+#    #+#     #+#    #+# #+#     #+#     #+#     #+#   #+#+#     #+#
 ########   ########  ###    ####  ########     ###     ###    ### ###     ### ########### ###    ####     ###
*/


class Constraint {
    constructor(p1, p2, length) {
        this.p1 = p1;
        this.p2 = p2;
        this.length = length;
    }

    solve() {
        // Calculate the distance between p1 and p2
        let dx = this.p2.x - this.p1.x;
        let dy = this.p2.y - this.p1.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let difference = this.length - distance;
        let percent = difference / distance / 2;

        let offsetX = dx * percent;
        let offsetY = dy * percent;

        if (!this.p1.fixed) {
            this.p1.x -= offsetX;
            this.p1.y -= offsetY;
        }

        if (!this.p2.fixed) {
            this.p2.x += offsetX;
            this.p2.y += offsetY;
        }
    }
}

/*
:::::::::   :::::::: ::::::::::: ::::    ::: :::::::::::
:+:    :+: :+:    :+:    :+:     :+:+:   :+:     :+:
+:+    +:+ +:+    +:+    +:+     :+:+:+  +:+     +:+
+#++:++#+  +#+    +:+    +#+     +#+ +:+ +#+     +#+
+#+        +#+    +#+    +#+     +#+  +#+#+#     +#+
#+#        #+#    #+#    #+#     #+#   #+#+#     #+#
###         ######## ########### ###    ####     ###
*/


class Point {
    constructor(x, y, fixed = false) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.gravity = 0.5;  // Gravity value for downward force
        this.fixed = fixed;  // Whether this point is fixed (pinned)
    }

    update() {
        if (this.fixed) return;  // If the point is pinned, don't update its position

        // Verlet integration step: calculate the new position
        let vx = (this.x - this.oldX) * 0.99;  // Horizontal velocity with damping
        let vy = (this.y - this.oldY) * 0.99;  // Vertical velocity with damping

        this.oldX = this.x;
        this.oldY = this.y;

        this.x += vx;
        this.y += vy + this.gravity;  // Apply gravity and movement
    }
}

/*
:::::::::   ::::::::  :::::::::  ::::::::::
:+:    :+: :+:    :+: :+:    :+: :+:
+:+    +:+ +:+    +:+ +:+    +:+ +:+
+#++:++#:  +#+    +:+ +#++:++#+  +#++:++#
+#+    +#+ +#+    +#+ +#+        +#+
#+#    #+# #+#    #+# #+#        #+#
###    ###  ########  ###        ##########
*/

class Rope {
    constructor(startX, startY, endX, endY, segments, segmentLength) {
        this.points = [];
        this.constraints = [];

        // Create points: distribute points evenly between start and end
        let dx = (endX - startX) / (segments - 1);
        let dy = (endY - startY) / (segments - 1);

        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;

        for (let i = 0; i < segments; i++) {
            // Calculate the position of each point along the line between start and end
            let x = startX + i * dx;
            let y = startY + i * dy;

            // Fix the first and last points
            let fixed = (i === 0 || i === segments - 1);
            this.points.push(new Point(x, y, fixed));
        }

        // Create constraints (links between consecutive points)
        for (let i = 0; i < segments - 1; i++) {
            this.constraints.push(new Constraint(this.points[i], this.points[i + 1], segmentLength));
        }

        this.start = new Image();
        this.end = new Image();
        this.start.src = 'img/sprites/wire_start.png';
        this.end.src = 'img/sprites/wire_end.png';
        
    }

    update() {
        // Update the positions of points (simulate physics)
        this.points.forEach(point => point.update());

        // Solve constraints multiple times to ensure they are enforced
        for (let i = 0; i < 5; i++) {  // Multiple iterations to stabilize the rope
            this.constraints.forEach(constraint => constraint.solve());
        }

        // Ensure the first and last points remain fixed
        let last = this.points.length - 1;
        this.points[0].x = this.points[0].oldX;
        this.points[0].y = this.points[0].oldY;
        this.points[last].x = this.points[last].oldX;
        this.points[last].y = this.points[last].oldY;
    }

    draw() {
        // Draw the rope
        ctx.beginPath();
        ctx.moveTo(this.points[0].x - cameraX, this.points[0].y - cameraY);

        this.points.forEach(point => {
            ctx.lineTo(point.x - cameraX, point.y - cameraY);
        });

        ctx.stroke();
        ctx.drawImage(this.start, this.startX - cameraX - 16, this.startY - cameraY - 16)
        ctx.drawImage(this.end, this.endX - cameraX - 16, this.endY - cameraY - 16)
    }
}

// TODO: from and to electrical sending
