$('ul').on("click", 'button[name="ajouterTache"]', function(){
    
        $(this).attr("disabled","disabled");

        var formulaire = '<div id="conteneur"><form id="formulaireTache" value="'+this.id+'" method="POST"><label for="title">Titre </label><input type="text" id="title" name="title"><br /><label for="description">Description </label><input type="text" id="description" name="description"></input><br /><label for="status">Status </label><input type="text" id="status" name="status"><br /><button type="submit" id="save">envoyer</button> <button type="button" id='+this.id+' name="annulerTache">Annuler</button></a></form><a> </div>';


      
        $(this).after(formulaire);
        var user_id = this.id;

        $('#formulaireTache[value="'+this.id+'"]').on('submit', function(e){
          var url = "index.html";
          e.preventDefault();
        
          var title = $('#title').val();
          var description = $('#description').val();
          var status = $('#status').val();
              

          var Task = {
            "title" : title,
            "description": description,
            "status": status
          };
    
          $.ajax({
            url:'http://127.0.0.1:8000/tasks/'+user_id, 
            type : 'POST',
            data: JSON.stringify(Task),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
              console.log(data);
              alert('tache ajoutée avec succés');
              window.location.href= url;
            },
            error: function(){
              alert(" have a problem");
            }
          });


        });

        $('ul').on("click",'button[name="annulerTache"][id="'+this.id+'"]', function(){
          $('button[name="ajouterTache"][id = "'+this.id+'"]').removeAttr("disabled");
          $('#formulaireTache[value="'+this.id+'"]').remove();
        });

    });
         
