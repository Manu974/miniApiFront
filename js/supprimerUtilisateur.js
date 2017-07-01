
$('ul').on("click", 'button[name="supprimerUtilisateur"]', function(){

  $.ajax({
    url:'http://test1.developpeurfbs.com/api/users/'+this.id, 
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