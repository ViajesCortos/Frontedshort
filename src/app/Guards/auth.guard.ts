import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router =inject(Router);
    const authService = inject (AuthService);
    const IsAuthenticated = authService.IsAuthenticated();
    
    if (IsAuthenticated) {
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
};
