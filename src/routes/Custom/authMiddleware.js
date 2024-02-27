const authMiddleware = (req, res, next) => {

    if (!req.session.user) {
      return res.status(401).json({ message: 'No autorizado. Debes iniciar sesión.' });
  }

  const { rol } = req.session.user;

  if (rol !== 'admin') {
      return res.status(403).json({ message: 'Acceso prohibido. Se requieren permisos de administrador.' });
  }

  next();
};

export default authMiddleware;
