import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMensajesComponent } from './chat-mensajes.component';

describe('ChatMensajesComponent', () => {
  let component: ChatMensajesComponent;
  let fixture: ComponentFixture<ChatMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
