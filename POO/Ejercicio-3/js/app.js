class Rectangle
{
	constructor(width, height)
	{
		if(width != height)
		{
			this._width = width;
			this._height = height;
		}
		else console.log('No es un rectangulo.');
	}

	areaRect()
	{
		return this._width * this._height;
	}

	perimeterRect()
	{
		return (2*(this._width + this._height));
	}

	showData()
	{
		console.log(this.getWidth);
		console.log(this.getHeight);
	}

	modifyData(width, height)
	{
		this.newWidth = width;
		this.newHeight = height;
	}

	set newWidth(width)
	{
		this._width = width;
	}

	set newHeight(height)
	{
		this._height = height;
	}

	get getWidth()
	{
		return this._width;
	}

	get getHeight()
	{
		return this._height;
	}
}
