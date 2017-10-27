# Create PageComponent
pageScroller = new PageComponent
	y: Align.bottom(-25)
	x: Align.center
	width: Screen.width / 4
	height: 14
	scrollVertical: false
	clip: false
		
pageName = (index) ->
	switch index
		when 0 then return "Live"
		when 1 then return "Normal"
		when 2 then return "Boomerang"
		when 3 then return "Superzoom"
		when 4 then return "Rewind"
		when 5 then return "Hands-free"
		
# Loop to create pages
for index in [0...6]
	page = new TextLayer
		size: pageScroller.size
		text: pageName(index)
		fontSize: 14
		fontWeight: "600"
		textAlign: "center"
		textTransform: "uppercase"
		color: "#FFF"
		x: (pageScroller.width + 30) * index
		parent: pageScroller.content
		shadow1:
			y: 0
			x: 0
			blur: 3
			color: "hsla(0, 0%, 0%, 0.73)"
			
	page.onClick ->
		pageScroller.snapToPage(this)
		
tap.states = 
	normal:
		width: 55
		animationOptions:
			curve: Bezier.ease
			time: 0.2
	live:
		width: 200		
		x: Align.center
		animationOptions:
			curve: Bezier.ease
			time: 0.2

tap.stateSwitch("normal")

pageScroller.snapToPage(pageScroller.content.children[1], false)

pageScroller.on "change:currentPage", ->
	if pageScroller.currentPage is pageScroller.content.children[0]
		tap.animate("live")
		tap_overlay.opacity = 0
	else
		tap.animate("normal")
		tap_overlay.opacity = 1
		