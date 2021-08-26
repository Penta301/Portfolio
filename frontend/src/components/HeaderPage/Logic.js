function Logic() {
  const evaluationRender = (location) => {
    if (location.pathname === "/know-more") {
      return false;
    }
    return true;
  };

  return { evaluationRender };
}

export default Logic;
