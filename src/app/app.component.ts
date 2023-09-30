import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagination',
  template: `
  <div>
    <table class="table">
      <thead >
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of result">
          <td>
            {{ item.id }}
          </td>
          <td>
            {{ item.firstName }}
          </td>
          <td>
            {{ item.lastName }}
          </td>
        </tr>
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
  public results = [
    { "id": 1, "firstName": "David", "lastName": "Wallace" },
    { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
    { "id": 3, "firstName": "Anthony", "lastName": "Thomson" }
  ]

  constructor() { }



  ngOnInit(): void {

  }


}
