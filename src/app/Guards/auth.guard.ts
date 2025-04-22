import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../Services/Auth.service';
=======
import { AuthService } from '../Services/auth.service';
>>>>>>> 18fe514 (feat:Mapa interactivo con marcadores test)

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
