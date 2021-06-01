import { TestBed } from '@angular/core/testing';

import { BoardModeratorService } from './board-moderator.service';

describe('BoardModeratorService', () => {
  let service: BoardModeratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardModeratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
