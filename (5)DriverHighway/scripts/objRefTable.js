const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Audio,
		C3.Plugins.Sprite,
		C3.Behaviors.lunarray_LiteTween,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Plugins.TiledBg,
		C3.Behaviors.Fade,
		C3.Plugins.Spritefont2,
		C3.Plugins.LocalStorage,
		C3.Plugins.Browser,
		C3.Behaviors.Rotate,
		C3.Plugins.Keyboard,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Text,
		C3.Behaviors.Bullet,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Particles.Cnds.CompareInstanceVar,
		C3.Plugins.Particles.Acts.SetPosToObject,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Behaviors.lunarray_LiteTween.Cnds.OnEnd,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Particles.Acts.MoveToBottom,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Behaviors.lunarray_LiteTween.Cnds.IsActive,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.lunarray_LiteTween.Acts.Start,
		C3.Behaviors.lunarray_LiteTween.Acts.SetTarget,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.lunarray_LiteTween.Acts.Stop,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.LayerNumber,
		C3.Plugins.Particles.Acts.SetAngle,
		C3.Plugins.TiledBg.Acts.SetSize,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.Destroy,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Behaviors.Flash.Cnds.OnFlashEnded,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Acts.SnapshotCanvas,
		C3.Plugins.Eponesh_GameScore.Cnds.IsAdsStickyPlaying,
		C3.Plugins.Eponesh_GameScore.Acts.AdsCloseSticky,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.Eponesh_GameScore.Cnds.IsAdsFullscreenPlaying,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardOpen,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardSetRecord,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardPublishRecord,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.Sprite.Cnds.CompareHeight,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowSticky,
		C3.Behaviors.lunarray_LiteTween.Acts.SetEasing,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowFullscreen,
		C3.Plugins.Audio.Acts.SetSilent
	];
};
self.C3_JsPropNameTable = [
	{Audio: 0},
	{ROAD1: 0},
	{DIE: 0},
	{LiteTween: 0},
	{Flash: 0},
	{PLAYER_CAR: 0},
	{Touch: 0},
	{PART: 0},
	{Pin: 0},
	{Particles: 0},
	{CAR1: 0},
	{CAR2: 0},
	{CAR3: 0},
	{CAR4: 0},
	{BG: 0},
	{POSITION: 0},
	{Fade: 0},
	{dark: 0},
	{play: 0},
	{Menu: 0},
	{Replay: 0},
	{Back: 0},
	{var: 0},
	{SpriteFont: 0},
	{audio: 0},
	{On: 0},
	{Music: 0},
	{sounds: 0},
	{BAR: 0},
	{Fichier2: 0},
	{Fichier3: 0},
	{CNTRL: 0},
	{CONTROL: 0},
	{Fichier4: 0},
	{Fichier5: 0},
	{Moregames: 0},
	{LocalStorage: 0},
	{Browser: 0},
	{ROAD2: 0},
	{ROAD3: 0},
	{ROAD4: 0},
	{arrow: 0},
	{hand: 0},
	{Fichier: 0},
	{Close: 0},
	{red_collision: 0},
	{Untitled: 0},
	{TiledBackground: 0},
	{SpriteFont2: 0},
	{Rotate: 0},
	{Asset: 0},
	{Keyboard: 0},
	{PopUp2: 0},
	{OK: 0},
	{GamePush: 0},
	{image: 0},
	{image2: 0},
	{record_menu: 0},
	{image3: 0},
	{image4: 0},
	{image5: 0},
	{image6: 0},
	{image7: 0},
	{image8: 0},
	{image9: 0},
	{image10: 0},
	{rec1: 0},
	{rec2: 0},
	{image11: 0},
	{image12: 0},
	{image13: 0},
	{image14: 0},
	{image15: 0},
	{Bullet: 0},
	{CARS: 0},
	{GUI: 0},
	{ROADS: 0},
	{RATE: 0},
	{RATE2: 0},
	{RATED: 0},
	{inter: 0},
	{AID: 0},
	{MUSIC: 0},
	{SOUNDS: 0},
	{SCORE: 0},
	{HIGHSCORE: 0},
	{SPEED: 0},
	{LEVELS: 0},
	{Y: 0},
	{Y2: 0}
];

self.InstanceType = {
	Audio: class extends self.IInstance {},
	ROAD1: class extends self.ISpriteInstance {},
	PLAYER_CAR: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	CAR1: class extends self.ISpriteInstance {},
	CAR2: class extends self.ISpriteInstance {},
	CAR3: class extends self.ISpriteInstance {},
	CAR4: class extends self.ISpriteInstance {},
	BG: class extends self.ITiledBackgroundInstance {},
	POSITION: class extends self.ITiledBackgroundInstance {},
	dark: class extends self.ITiledBackgroundInstance {},
	play: class extends self.ISpriteInstance {},
	Menu: class extends self.ISpriteInstance {},
	Replay: class extends self.ISpriteInstance {},
	Back: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	On: class extends self.ISpriteInstance {},
	Music: class extends self.ISpriteInstance {},
	sounds: class extends self.ISpriteInstance {},
	BAR: class extends self.ISpriteInstance {},
	Fichier2: class extends self.ISpriteInstance {},
	Fichier3: class extends self.ISpriteInstance {},
	CONTROL: class extends self.ISpriteInstance {},
	Fichier4: class extends self.ISpriteInstance {},
	Fichier5: class extends self.ISpriteInstance {},
	Moregames: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	ROAD2: class extends self.ISpriteInstance {},
	ROAD3: class extends self.ISpriteInstance {},
	ROAD4: class extends self.ISpriteInstance {},
	arrow: class extends self.ISpriteInstance {},
	hand: class extends self.ISpriteInstance {},
	Fichier: class extends self.ISpriteInstance {},
	Close: class extends self.ISpriteInstance {},
	red_collision: class extends self.ITiledBackgroundInstance {},
	Untitled: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	SpriteFont2: class extends self.ISpriteFontInstance {},
	Asset: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	PopUp2: class extends self.ISpriteInstance {},
	OK: class extends self.ISpriteInstance {},
	GamePush: class extends self.IInstance {},
	image: class extends self.ISpriteInstance {},
	image2: class extends self.ISpriteInstance {},
	record_menu: class extends self.ITextInstance {},
	image3: class extends self.ISpriteInstance {},
	image4: class extends self.ISpriteInstance {},
	image5: class extends self.ISpriteInstance {},
	image6: class extends self.ISpriteInstance {},
	image7: class extends self.ISpriteInstance {},
	image8: class extends self.ISpriteInstance {},
	image9: class extends self.ISpriteInstance {},
	image10: class extends self.ISpriteInstance {},
	rec1: class extends self.ITextInstance {},
	rec2: class extends self.ITextInstance {},
	image11: class extends self.ISpriteInstance {},
	image12: class extends self.ISpriteInstance {},
	image13: class extends self.ISpriteInstance {},
	image14: class extends self.ISpriteInstance {},
	image15: class extends self.ISpriteInstance {},
	CARS: class extends self.ISpriteInstance {},
	GUI: class extends self.ISpriteInstance {},
	ROADS: class extends self.ISpriteInstance {}
}