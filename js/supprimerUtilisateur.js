
$('ul').on("click", 'button[name="supprimerUtilisateur"]', function(){
        
                  $.ajax({
                        url:'http://127.0.0.1:8000/users/'+this.id, 
                        type : 'DELETE',
                        timeout : 3000,
                        success: function(data){
                          alert('utilisateur supprimé');
                          location.reload(true);
                        },
                        error: function(){
                          alert('La requête n\'a pas abouti');
                        }
                  });  
});