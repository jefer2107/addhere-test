import { getSession } from 'next-auth/react';

const protect = async (req, res, callback: () => Promise<any>) => {
    const session = await getSession({ req });
    if (session) {
        callback().then();
    } else {
        res.status(403).json({
            message: `The HTTP ${req.method} method is not supported at this route.`,
        });
    }
}

export default protect;