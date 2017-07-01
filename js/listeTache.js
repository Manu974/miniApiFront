
$('ul').on("click", 'button[name="listerTache"]', function(e){

  $(this).attr("disabled","disabled");
  var fermerListe = ' <a><button id='+this.id+' name="fermerTache"> Fermer la liste</button></a>'
  $(this).after(fermerListe);

  $.ajax({
    url:'http://127.0.0.1:8000/api/lists/tasks/'+this.id, 
    type : 'GET',
    timeout : 3000,
    success: function(data){

      $.each(data,function(i,task){
        var idTask= String(task.id);
        var nameUser= task.user_id.name;

        var liTask = '<li id='+idTask+' value='+task.user_id.id+'> title : '+task.title +' description: '+task.description+' Date de création : '+task.creation_date+' status : '+task.status+'<a> <button id='+idTask+' name="supprimerTache">Supprimer cet tache</button></a></li>';

        $('[name$='+nameUser+']').append(liTask); 

      });

    },
    error: function(){
      alert('La requête n\'a pas abouti');
    }
  });

  $('ul').on("click", 'button[name="fermerTache"][id="'+this.id+'"]', function(e){

    $('button[name="listerTache"][id="'+this.id+'"]').removeAttr("disabled");
    $(this).remove();
    $('li[value="'+this.id+'"]').remove()
  });
});