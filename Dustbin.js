class Dustbin{
	constructor(){
    boxx1 = Bodies.rectangle(500, 660, 20, 200, { isStatic: true });
	World.add(world, boxx1)

	boxx2 = Bodies.rectangle(400, 750, 200, 20, { isStatic: true });
	World.add(world, boxx2)

	boxx3 = Bodies.rectangle(300, 660, 20, 200, { isStatic: true });
	World.add(world, boxx3);
	}
}
