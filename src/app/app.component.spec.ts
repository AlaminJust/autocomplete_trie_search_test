import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AutoCompleteTrieSearch, INodeValue } from 'autocomplete-trie-search';
import * as uuid from 'uuid';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Performance test by inserting 10000 data', () => {
    const autoCompleteTrieSearch = new AutoCompleteTrieSearch();
    const start = performance.now();

    for(let i = 0; i<10000; i++){
      const node: INodeValue = {
        text: uuid.v4(),
        value: {id: uuid.v4(), text: i},
        weight: 1
      };
      autoCompleteTrieSearch.insertOrUpddate(node);
    }
    
    const takenTime = performance.now() - start;

    console.log("Time taken to insert 100000 data: " + takenTime + "milisecond.");
    expect(takenTime).toBeLessThan(1000);

  });

  it('Suggestion performances by inserting are 10000 data', () => {
    const search = new AutoCompleteTrieSearch({maxSuggestion: 10, allowedMismatchCount: 3});

    for(let i = 0; i<10000; i++){
      const node: INodeValue = {
        text: uuid.v4(),
        value: {id: uuid.v4(), text: i},
        weight: 1
      };
      search.insertOrUpddate(node);
    }

    var list = [
      {
        text: "hello123world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 4
      },
      {
        text: "hello231world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 5
      },
      {
        text: "hello3423world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 6
      },
      {
        text: "hello423world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 7
      },
      {
        text: "hello53world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 8
      },
      {
        text: "hello43543world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 9
      },
      {
        text: "hello4534world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 11
      },
      {
        text: "hello545world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 12
      },
      {
        text: "hello4543world",
        value: {id: uuid.v4(), text: 'AL AMIN'},
        weight: 13
      }
    ]
    
    search.insertOrUpddate(list);
    
    const sStart = performance.now();

    console.log('Autocomplete suggessions1 => ', search.suggession("hello"));
    const takenForSuggesion = performance.now() - sStart;
    console.log("Time taken for providing suggesion : "+ takenForSuggesion + " in millisecond.", 'nodecount: ', search.nodeCount)
    expect(takenForSuggesion).toBeLessThan(1000)
  });

});
