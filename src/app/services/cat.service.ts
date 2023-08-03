import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../models/cat-fact.model';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(public http: HttpClient) { }
   getCatFacts(maxlength: number, limit: number): Observable <CatFact[]> {
    let responseFacts = this.http.get<CatFact[]>(`https://catfact.ninja/facts?max_length=${maxlength}&limit=${limit}`)
    

    
    return responseFacts;  
  }
   getCatImages(limit: number) :Observable<any> {
    return this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
  }
}

// let responseImage = this.http.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
// let promiseFacts = await new Promise<CatFact[]>((resolve, reject) => {
//   responseFacts.subscribe((data: any) => {
//     // console.log(data['data']);
//     resolve(data['data']); 
//   })
  
// })
// let promiseImage = new Promise<any>((resolve, reject) => {
//   responseImage.subscribe((data:any) => {
//     resolve(data)
//   })
// })

// let data = await Promise.all([promiseFacts, promiseImage])
// let facts: CatFact[] = data[0];
// let images: any[] = data[1];
// facts.forEach((fact,index) => {
//   result.push({
//     id : fact.id,
//     fact: fact.fact,
//     imageUrl: images[index].url,
//     length: fact.length,
//   })
// })
// console.log(result)