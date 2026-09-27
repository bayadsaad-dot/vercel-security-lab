const users = {
    "1001": "session-user-1001",
    "1002": "session-user-1002",
    "1003": "session-admin-1003"
};

export default function handler(req, res) {
    const { id } = req.query;

    if (!users[id]) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.setHeader(
        "Set-Cookie",
        `lab_session=${users[id]}; Path=/; HttpOnly; SameSite=Lax`
    );

    return res.status(200).json({
        message: "Logged in",
        user_id: id
    });
}
