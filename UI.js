//UI Class
class UI {
  constructor(list, alert) {
    this.list = list;
    this.alertMsg = alert;
  }

  setAlert = (msg, type) => {
    const html = `
    <div class='alert alert-${type}' role="alert">
        <i class='fas fa-info'></i> ${msg}
    </div>
`;
    this.alertMsg.innerHTML = html;
    setTimeout(() => {
      this.alertMsg.innerHTML = '';
    }, 4000);
  };

  render(movies) {
    this.list.innerHTML = '';
    movies.forEach(movie => {
      this.list.innerHTML += `<tr> 
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td>${movie.no}</td>
                <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
            </tr>`;
    });
  }
}
