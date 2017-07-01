
$('ul').on("click", 'button[name="supprimerTache"]', function(){

  $.ajax({
    url:'http://127.0.0.1:8000/tasks/'+this.id, 
    type : 'DELETE',
    timeout : 3000,
    success: function(data){
      alert('tache supprimée');
      location.reload(true);
    },
    error: function(){
      alert('La requête n\'a pas abouti');
    }
  });  
});  