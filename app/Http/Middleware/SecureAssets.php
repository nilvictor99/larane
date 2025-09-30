<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecureAssets
{
    public function handle(Request $request, Closure $next): Response
    {
        if (config('app.env') === 'production') {
            $response = $next($request);

            if (method_exists($response, 'header')) {
                $response->header('Content-Security-Policy', "upgrade-insecure-requests");
            }

            return $response;
        }

        return $next($request);
    }
}
