$(function(){

    //Model
    var Row = Backbone.Model.extend({
        defaults:{
            fname: '',
            lname: 'Sharma'
        }
    });

    //Collection
    var TableCollection = Backbone.Collection.extend({
        models: Row,
        fetchRecords: function(){
            this.reset([
                new Row({fname: 'Mukund'}),
                new Row({fname: 'Prakrity'})
            ]);
        }
    });

    //View
    var CellView = Backbone.View.extend({
        tagName: 'td',
        initialize: function(data){
            this.$el.text(data);
        }
    })

    var RowView = Backbone.View.extend({
        tagName: 'tr',
        initialize: function(){
            var collection = new TableCollection();
            collection.fetchRecords();
            collection.forEach((row)=>{
                var cellView = new CellView(row.get('fname'));
                this.$el.append(cellView.$el);
                $('tbody').append(this.$el);
            });
            
        }
    });

    var table = new RowView();

});
