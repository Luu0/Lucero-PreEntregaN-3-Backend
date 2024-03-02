const authMiddleware = (req, res, next) => {
  console.log(req.session.user)

    if (!req.session.user) {
      return res.status(401).json({ message: 'No autorizado. Debes iniciar sesión.' });
  }

  const { rol } = req.session.user;

  if (rol !== 'user') {
      return res.status(403).json({ message: 'Acceso prohibido. Se requieren permisos de administrador.' });
  }

  next();
};

export default authMiddleware;
