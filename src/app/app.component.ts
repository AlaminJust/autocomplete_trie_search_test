import { Component, OnInit } from '@angular/core';
import { AutoCompleteTrieSearch, INodeValue } from 'autocomplete-trie-search';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'autocomplete_trie_search_test';
  sugessionList: any[];
  search: AutoCompleteTrieSearch;

  constructor(){
    this.sugessionList = [];
    this.search = new AutoCompleteTrieSearch();
  }

  ngOnInit(){
    for(let i = 0; i < 100000; i++){
      const node: INodeValue = {
        text: uuid.v4(),
        value: {id: uuid.v4(), value: i},
        weight: 3
      }

      this.search.insertOrUpddate(node);
    }

    var list = [
      {
        text: "Apple iPhone 13",
        value: {id: uuid.v4(), value: "Apple iPhone 13"},
        weight: 10
      },
      {
        text: "Amazon Echo Dot",
        value: {id: uuid.v4(), value: "Amazon Echo Dot"},
        weight: 8
      },
      {
        text: "Samsung Galaxy Watch 4",
        value: {id: uuid.v4(), value: "Samsung Galaxy Watch 4"},
        weight: 6
      },
      {
        text: "PlayStation 5",
        value: {id: uuid.v4(), value: "PlayStation 5"},
        weight: 12
      },
      // add 46 more objects here using the same structure as above
      {
        text: "Bose QuietComfort Earbuds",
        value: {id: uuid.v4(), value: "Bose QuietComfort Earbuds"},
        weight: 7
      },
      {
        text: "Fitbit Charge 5",
        value: {id: uuid.v4(), value: "Fitbit Charge 5"},
        weight: 5
      },
      {
        text: "Google Nest Hub",
        value: {id: uuid.v4(), value: "Google Nest Hub"},
        weight: 9
      },
      {
        text: "Microsoft Surface Laptop 4",
        value: {id: uuid.v4(), value: "Microsoft Surface Laptop 4"},
        weight: 11
      },
      {
        text: "LG OLED TV",
        value: {id: uuid.v4(), value: "LG OLED TV"},
        weight: 13
      },
      {
        text: "Sony WH-1000XM4 Wireless Headphones",
        value: {id: uuid.v4(), value: "Sony WH-1000XM4 Wireless Headphones"},
        weight: 8
      },
      {
        text: "Amazon Kindle Paperwhite",
        value: {id: uuid.v4(), value: "Amazon Kindle Paperwhite"},
        weight: 9
      },
      {
        text: "Bose QuietComfort Earbuds",
        value: {id: uuid.v4(), value: "Bose QuietComfort Earbuds"},
        weight: 11
      },
      {
        text: "Samsung Galaxy Watch 4 Classic",
        value: {id: uuid.v4(), value: "Samsung Galaxy Watch 4 Classic"},
        weight: 10
      },
      {
        text: "DJI Mavic Air 2",
        value: {id: uuid.v4(), value: "DJI Mavic Air 2"},
        weight: 8
      },
      {
        text: "Nintendo Switch OLED",
        value: {id: uuid.v4(), value: "Nintendo Switch OLED"},
        weight: 9
      },
      {
        text: "Sony A7C Mirrorless Camera",
        value: {id: uuid.v4(), value: "Sony A7C Mirrorless Camera"},
        weight: 12
      },
      {
        text: "Apple iPad Air",
        value: {id: uuid.v4(), value: "Apple iPad Air"},
        weight: 7
      },
      {
        text: "Bose QuietComfort Earbuds",
        value: {id: uuid.v4(), value: "Bose QuietComfort Earbuds"},
        weight: 11
      },
      {
        text: "Samsung Galaxy Watch 4 Classic",
        value: {id: uuid.v4(), value: "Samsung Galaxy Watch 4 Classic"},
        weight: 10
      },
      {
        text: "DJI Mavic Air 2",
        value: {id: uuid.v4(), value: "DJI Mavic Air 2"},
        weight: 8
      },
      {
        text: "Nintendo Switch OLED",
        value: {id: uuid.v4(), value: "Nintendo Switch OLED"},
        weight: 9
      },
      {
        text: "Sony A7C Mirrorless Camera",
        value: {id: uuid.v4(), value: "Sony A7C Mirrorless Camera"},
        weight: 12
      },
      {
        text: "Apple iPad Air",
        value: {id: uuid.v4(), value: "Apple iPad Air"},
        weight: 7
      },
      {
        text: "Xbox Series X",
        value: {id: uuid.v4(), value: "Xbox Series X"},
        weight: 10
      },
      {
        text: "GoPro HERO10 Black",
        value: {id: uuid.v4(), value: "GoPro HERO10 Black"},
        weight: 9
      },
      {
        text: "Fitbit Charge 5",
        value: {id: uuid.v4(), value: "Fitbit Charge 5"},
        weight: 8
      },
      {
        text: "Sony WH-1000XM4 Wireless Headphones",
        value: {id: uuid.v4(), value: "Sony WH-1000XM4 Wireless Headphones"},
        weight: 8
      },
      {
        text: "Apple Watch Series 7",
        value: {id: uuid.v4(), value: "Apple Watch Series 7"},
        weight: 10
      }
    ];

    this.search.insertOrUpddate(list);
  }

  sugesstion(event: any){
    console.log(event);
    this.sugessionList = this.search.suggession(event.target.value);
  }

}
