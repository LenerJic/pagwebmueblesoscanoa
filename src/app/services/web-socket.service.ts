import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  io = io("http://localhost:8000",{
    autoConnect: true
  });

  constructor() { }
}