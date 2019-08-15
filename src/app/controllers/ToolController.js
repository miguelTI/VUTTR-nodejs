import * as Yup from 'yup';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    const mockupData = [
      {
        id: 1,
        title: 'Notion',
        link: 'https://notion.so',
        description:
          'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
        tags: [
          'organization',
          'planning',
          'collaboration',
          'writing',
          'calendar',
        ],
      },
      {
        id: 2,
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      },
      {
        id: 3,
        title: 'fastify',
        link: 'https://www.fastify.io/',
        description:
          'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
        tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
      },
      {
        id: 4,
        title: 'insomnia',
        link: 'https://www.insomnia.io/',
        description: 'HTTP request for modern developers.',
        tags: null,
      },
    ];

    const response = tag
      ? mockupData.filter(tool => tool.tags && tool.tags.includes(tag))
      : mockupData;

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

    return res.status(201).json({ ...req.body, id: 1 });
  }

  async delete(req, res) {
    return res.status(204).send();
  }
}

export default new ToolController();
