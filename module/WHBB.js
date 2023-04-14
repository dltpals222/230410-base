function WHBB(parentName, width, height, border, backgroundColor, callback) {
  const parentStyle = parentName.style;
  parentStyle.width = width;
  parentStyle.height = height;
  parentStyle.border = border;
  parentStyle.backgroundColor = backgroundColor;
  if (callback) {
    callback(parentStyle);
  }
}

export default WHBB;
