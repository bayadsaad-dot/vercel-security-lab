export default function handler(req, res) {
    return res.status(200).json({
        message: "Admin API endpoint",
        environment: "security-lab",
        sensitive_demo_value: "LAB_ONLY_VALUE"
    });
}
