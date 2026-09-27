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

export default function handler(req, res) {
    const { id } = req.query;

    if (!id || !users[id]) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    return res.status(200).json(users[id]);
}
