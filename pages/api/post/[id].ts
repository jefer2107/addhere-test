// pages/api/post/[id].ts
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import protect from '../../../utils/protect-route';

// DELETE /api/post/:id
export default async function handle(req, res) {
    protect(
        req,
        res,
        async () => {
            const postId = req.query.id;
            if (req.method === 'DELETE') {
                const post = await prisma.post.delete({
                    where: { id: Number(postId) },
                });
                res.json(post);
            }
        }
    );
}
