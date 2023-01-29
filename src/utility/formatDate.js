const formatDate = (dueDate) => {
  let dateObj = new Date(dueDate.replace(/-/g, '/'));
  let year = dateObj.getFullYear();
  let month =
    dateObj.getMonth() < 9
      ? '0' + (dateObj.getMonth() + 1)
      : dateObj.getMonth() + 1;
  let day =
    dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
  let formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export default formatDate;
