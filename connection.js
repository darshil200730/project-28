class Connection {
    constructor(a,b){
      var options={
          bodyA:a,
        pointB:b,
        length:20,
        stiffness:0.04

      }
      this.connection=Constraint.create(options)
      World.add(myWorld,this.connection)
    }
    display()
    {
        if(this.connection.bodyA!=null)
     line (this.connection.bodyA.position.x,this.connection.bodyA.position.y,this.connection.pointB.x,this.connection.pointB.y)
    }
    break()
    {
        this.connection.bodyA=null
    }
}