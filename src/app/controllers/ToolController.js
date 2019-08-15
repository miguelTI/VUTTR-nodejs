import * as Yup from 'yup';
import Tool from '../schemas/Tool';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    const filters = tag ? { tags: tag } : null;

    const response = await Tool.find(filters).sort({ createdAt: 'desc' });

    return res.json(response);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      link: Yup.string().required(),
      description: Yup.string().required(),
      tags: Yup.array(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid request.' });
    }

    const tool = await Tool.create(req.body);

    return res.status(201).json(tool);
  }

  async delete(req, res) {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(400).json({ error: 'Tool does not exist' });
    }

    await tool.delete();

    return res.status(204).send();
  }
}

export default new ToolController();
