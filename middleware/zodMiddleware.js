export const zodMiddleware = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: result.error.errors?.[0].message });
    }
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
