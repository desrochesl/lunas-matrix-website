// document.getElementById('myH1').textContent = "Welcome to Luna DesRoches Matrices";
// document.getElementById('myP').textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non alias in magni vero odit itaque! Officiis ab mollitia modi corporis distinctio adipisci magnam. Aut iste distinctio, delectus ut impedit repellendus.';

function addMatrix(matrix1, matrix2) {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    throw new Error("Matrices must have the same dimensions for addition.");
  }
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      matrix1[i][j] += matrix2[i][j];
    }
  }
  return matrix1;
}

function constantMultiplyMatrix(matrix, constant) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] *= constant;
    }
  }
  return matrix;
}

function multiplyMatrices(matrix1, matrix2) {
  if (matrix1[0].length !== matrix2.length)
    throw new Error(
      "Matrices must have the same dimensions for multiplication."
    );
  const rows = matrix1.length;
  const cols = matrix2[0].length;
  const result = Array.from({ length: rows }, () => Array(cols));

  for (let k = 0; k < matrix1.length; k++) {
    for (let i = 0; i < matrix2[0].length; i++) {
      result[k][i] = 0;
      for (let j = 0; j < matrix2.length; j++) {
        result[k][i] += matrix1[k][j] * matrix2[j][i];
      }
    }
  }

  return result;
}

export default {
  addMatrix
}