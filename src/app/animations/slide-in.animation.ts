import { trigger, transition, style, animate } from '@angular/animations';

export const slideIn = trigger('slideIn', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
    ])
]);