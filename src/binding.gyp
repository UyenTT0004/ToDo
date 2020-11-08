{
	"targets": [
		{
			"target_name": "binding",
			"type": "executable",
			"sources": [ "task.cpp", "taskMan.cpp"],
			"cflags": ["-Wall", "-std=c++11"],
			"conditions": [
				[ "OS=='mac'", {
					"xcode_settings": {
						"OTHER_CPLUSPLUSFLAGS": ["-std=c++11","-stdlib=libc++"],
						"OTHER_LDFLAGS": ["-stdlib=libc++"]}
				}]
			]
		}
	]
}
