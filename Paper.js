class Paper {
constructor (){
    var Options = {
        isStatic: false,
        restitution : 0.3,
        friction: 0.5,
        density: 0.2
    }

    this.body = Bodies.circle(100,200,100 , (Options), [1])


World.add(world, this.body);

}
display() {
    var position = this.body.position;
    circle(100,200,10);
}

}



