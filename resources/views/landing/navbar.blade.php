<!---------------------------------------------------------------------------------------
    NAVBAR
    ----------------------------------------------------------------------------------------->
    <nav class="navba navbar navbar-expand-lg fixed-top">
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="{{ route('index') }}">VootageVault</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="{{ route('index') }}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ route('explore') }}">Explore</a>
            </li>
            @if(Auth::check())
              <li class="nav-item">
                <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                  @csrf
                </form>
              </li>
            @endif
          </ul>
        </div>
      </div>
    </nav>