const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.jumpthru,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Behaviors.Bullet,
		C3.Behaviors.wrap,
		C3.Plugins.Spritefont2,
		C3.Plugins.LocalStorage,
		C3.Plugins.Browser,
		C3.Plugins.Particles,
		C3.Behaviors.lunarray_LiteTween,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.Platform,
		C3.Behaviors.Flash,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.viewportright,
		C3.Plugins.System.Exps.viewporttop,
		C3.Plugins.System.Exps.viewportleft,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Spritefont2.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.System.Exps.viewportbottom,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.Bullet.Cnds.CompareSpeed,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.SetVolume,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.TiledBg.Cnds.CompareY,
		C3.Plugins.TiledBg.Acts.SetY,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Particles.Cnds.OnCreated,
		C3.Plugins.Particles.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.Platform.Cnds.IsByWall,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Stop,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.lunarray_LiteTween.Acts.Start,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Eponesh_GameScore.Cnds.IsAdsRewardedPlaying,
		C3.Plugins.Eponesh_GameScore.Cnds.IsAdsFullscreenPlaying,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowFullscreen,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.lunarray_LiteTween.Cnds.IsActive,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Behaviors.lunarray_LiteTween.Cnds.OnEnd,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Audio.Acts.SetSilent
	];
};
self.C3_JsPropNameTable = [
	{Var: 0},
	{create: 0},
	{SCORE: 0},
	{Jumpthru: 0},
	{Platform: 0},
	{Touch: 0},
	{Keyboard: 0},
	{POSITION: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{HIT: 0},
	{Enemi3: 0},
	{Enemi4: 0},
	{Enemi5: 0},
	{TiledBackground2: 0},
	{Audio: 0},
	{Smock: 0},
	{Bullet: 0},
	{Wrap: 0},
	{CL: 0},
	{Replay: 0},
	{Fichier2: 0},
	{START: 0},
	{OBJECTS: 0},
	{SpriteFont: 0},
	{PAUSE: 0},
	{LocalStorage: 0},
	{Browser: 0},
	{Particles: 0},
	{jump: 0},
	{shoot: 0},
	{Player: 0},
	{SHOOT: 0},
	{flash: 0},
	{Player_bullet: 0},
	{Enemi2: 0},
	{Enemi1: 0},
	{stones: 0},
	{BulletBar: 0},
	{BulletBox: 0},
	{LiteTween: 0},
	{DARK: 0},
	{HOME: 0},
	{Obstacle: 0},
	{FScreen: 0},
	{GamePush: 0},
	{txt_highscore: 0},
	{highSc: 0},
	{Якорь: 0},
	{tap_zone: 0},
	{skin1: 0},
	{pngwingcom2: 0},
	{amonguswalking: 0},
	{gun: 0},
	{txt_prizhok: 0},
	{txt_vistrel: 0},
	{b_shop: 0},
	{skin3: 0},
	{skin2: 0},
	{skin4: 0},
	{skin5: 0},
	{skin6: 0},
	{cena1: 0},
	{cena2: 0},
	{cena3: 0},
	{cena4: 0},
	{cena5: 0},
	{cena6: 0},
	{skin7: 0},
	{skin8: 0},
	{skin9: 0},
	{skin10: 0},
	{skin11: 0},
	{shlapa1: 0},
	{galochka: 0},
	{image: 0},
	{txt_zvezdi: 0},
	{bonus: 0},
	{decor: 0},
	{OY2D: 0},
	{BulletBar2: 0},
	{Flash: 0},
	{Enemies: 0},
	{LiteTween2: 0},
	{GUI: 0},
	{PLAYERS: 0},
	{CONTROL: 0},
	{shop_okno: 0},
	{vibran_skin: 0},
	{kuplen_sk_1: 0},
	{kuplen_sk_2: 0},
	{kuplen_sk_3: 0},
	{kuplen_sk_4: 0},
	{kuplen_sk_5: 0},
	{kuplen_sk_6: 0},
	{Bullet2: 0},
	{LAYOUT: 0},
	{HIGH_SCORE: 0},
	{MONSTER: 0},
	{MinScroll: 0},
	{inter: 0},
	{Zvezdi: 0}
];

self.InstanceType = {
	Platform: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Enemi3: class extends self.ISpriteInstance {},
	Enemi4: class extends self.ISpriteInstance {},
	Enemi5: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Audio: class extends self.IInstance {},
	Smock: class extends self.ISpriteInstance {},
	CL: class extends self.ISpriteInstance {},
	Replay: class extends self.ISpriteInstance {},
	Fichier2: class extends self.ISpriteInstance {},
	START: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	PAUSE: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	jump: class extends self.ISpriteInstance {},
	shoot: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	flash: class extends self.ISpriteInstance {},
	Player_bullet: class extends self.ISpriteInstance {},
	Enemi2: class extends self.ISpriteInstance {},
	Enemi1: class extends self.ISpriteInstance {},
	stones: class extends self.ISpriteInstance {},
	BulletBar: class extends self.ISpriteInstance {},
	BulletBox: class extends self.ISpriteInstance {},
	DARK: class extends self.ITiledBackgroundInstance {},
	HOME: class extends self.ISpriteInstance {},
	Obstacle: class extends self.ISpriteInstance {},
	FScreen: class extends self.ISpriteInstance {},
	GamePush: class extends self.IInstance {},
	txt_highscore: class extends self.ITextInstance {},
	highSc: class extends self.ITextInstance {},
	tap_zone: class extends self.ISpriteInstance {},
	skin1: class extends self.ISpriteInstance {},
	pngwingcom2: class extends self.ISpriteInstance {},
	amonguswalking: class extends self.ISpriteInstance {},
	gun: class extends self.ISpriteInstance {},
	txt_prizhok: class extends self.ITextInstance {},
	txt_vistrel: class extends self.ITextInstance {},
	b_shop: class extends self.ISpriteInstance {},
	skin3: class extends self.ISpriteInstance {},
	skin2: class extends self.ISpriteInstance {},
	skin4: class extends self.ISpriteInstance {},
	skin5: class extends self.ISpriteInstance {},
	skin6: class extends self.ISpriteInstance {},
	cena1: class extends self.ITextInstance {},
	cena2: class extends self.ITextInstance {},
	cena3: class extends self.ITextInstance {},
	cena4: class extends self.ITextInstance {},
	cena5: class extends self.ITextInstance {},
	cena6: class extends self.ITextInstance {},
	skin7: class extends self.ISpriteInstance {},
	skin8: class extends self.ISpriteInstance {},
	skin9: class extends self.ISpriteInstance {},
	skin10: class extends self.ISpriteInstance {},
	skin11: class extends self.ISpriteInstance {},
	shlapa1: class extends self.ISpriteInstance {},
	galochka: class extends self.ISpriteInstance {},
	image: class extends self.ISpriteInstance {},
	txt_zvezdi: class extends self.ITextInstance {},
	bonus: class extends self.ISpriteInstance {},
	decor: class extends self.ISpriteInstance {},
	OY2D: class extends self.ISpriteInstance {},
	BulletBar2: class extends self.ISpriteInstance {},
	Enemies: class extends self.ISpriteInstance {},
	GUI: class extends self.ISpriteInstance {},
	PLAYERS: class extends self.ISpriteInstance {},
	CONTROL: class extends self.ISpriteInstance {}
}