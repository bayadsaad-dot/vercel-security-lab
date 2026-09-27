const users = {
    "1001": {
        id: "1001",
        name: "Saad",
        role: "user",
        email: "saad@example.test"
    },

    "1002": {
        id: "1002",
        name: "Test User",
        role: "user",
        email: "user1002@example.test"
    },

    "1003": {
        id: "1003",
        name: "Lab Admin",
        role: "admin",
        email: "admin@example.test"
    }
};

const sessions = {
    "session-user-1001": "1001",
    "session-user-1002": "1002",
    "session-admin-1003": "1003"
};

export default function handler(req, res) {
    const { id } = req.query;

    const cookie = req.headers.cookie || "";
    const match = cookie.match(/lab_session=([^;]+)/);
    const sessionToken = match ? match[1] : null;

    const currentUserId = sessions[sessionToken];

    if (!currentUserId) {
        return res.status(401).json({
            error: "Authentication required"
        });
    }

    if (!id || !users[id]) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    // Authorization check
    if (currentUserId !== id) {
        return res.status(403).json({
            error: "Forbidden"
        });
    }

    return res.status(200).json(users[id]);
}
