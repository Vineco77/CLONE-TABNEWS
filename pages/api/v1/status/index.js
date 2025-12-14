function status(request, response) {
  response.status(200).json({
    chave: "Status deu certo ação",
  });
}

export default status;
