exports.submitForm = (req, res) => {
    const { name, email, message } = req.body;
    console.log('Datos recibidos:', { name, email, message });
    const formData = { name, email, message };
    res.json(formData);
  };