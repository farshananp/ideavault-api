let ideas = [];

export default function handler(req, res) {

    if (req.method === 'GET') {
        return res.status(200).json(ideas);
    }

    if (req.method === 'POST') {
        const newIdea = {
            ...req.body,
            id: Date.now()
        };

        ideas.push(newIdea);

        return res.status(201).json(newIdea);
    }

    if (req.method === 'PUT') {
        const id = Number(req.query.id);

        const index = ideas.findIndex(
            idea => Number(idea.id) === id
        );

        if (index === -1) {
            return res.status(404).json({
                message: 'Idea not found'
            });
        }

        ideas[index] = {
            ...req.body,
            id
        };

        return res.status(200).json(ideas[index]);
    }

    if (req.method === 'DELETE') {
        const id = Number(req.query.id);

        ideas = ideas.filter(
            idea => Number(idea.id) !== id
        );

        return res.status(200).json({
            message: 'Idea deleted successfully'
        });
    }

    return res.status(405).json({
        message: 'Method not allowed'
    });
}