const ADDAUTHOR = "ADDAUTHOR";
const DELETEAUTHOR = "DELETEAUTHOR";

export const addAuthor = newAuthor => {
  return {
    type: ADDAUTHOR,
    payload: newAuthor
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETEAUTHOR,
    payload: author
  };
};
