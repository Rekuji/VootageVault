<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        return view('landing.index');
    }

    public function explore()
    {
        return view('landing.explore');
    }

    public function login()
    {
        return view('landing.login');
    }
}