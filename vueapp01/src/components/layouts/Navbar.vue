<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Cashbee</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        
                         <router-link to="/" class="nav-link">
                            Home
                        </router-link>
                        <span class="sr-only">(current)</span>
                    </li>
                    <li class="nav-item">
                        <router-link to="/players" class="nav-link">
                            Players
                        </router-link>
                    </li>
                   
                    </ul>
                </div>
            </nav>
       
        <br>
        
    </div>
</template>
<script>
export default {
    
}
</script>