import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagination',
  template: `
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
      //  render elements in tbody
      </tbody>
    </table>
    <section class="pagination">
      <button class="first-page-btn">first</button>
      <button class="previous-page-btn">previous</button>
      <button class="next-page-btn">next</button>
      <button class="last-page-btn">last</button>
    </section>
  </div>
`
})
export class PaginationComponent implements OnInit {


  constructor() { }



  ngOnInit(): void {

  }


}
