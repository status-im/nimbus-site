import React, { useEffect } from 'react'
import './HeroAsset.scss'

export type HeroAssetProps = React.HTMLProps<HTMLAnchorElement> & {
  content: string
}

export const HeroAsset: React.FC<HeroAssetProps> = ({ children }) => {
  useEffect(() => {
    ;(function() {
      var lastTime = 0
      var vendors = ['ms', 'moz', 'webkit', 'o']

      for (
        var x = 0;
        x < vendors.length && !window.requestAnimationFrame;
        ++x
      ) {
        window.requestAnimationFrame =
          window[vendors[x] + 'RequestAnimationFrame']
        //@ts-ignore
        window.cancelRequestAnimationFrame =
          window[vendors[x] + 'CancelRequestAnimationFrame']
      }

      if (!window.requestAnimationFrame)
        //@ts-ignore
        window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime()
          var timeToCall = Math.max(0, 16 - (currTime - lastTime))
          var id = window.setTimeout(function() {
            callback(currTime + timeToCall)
          }, timeToCall)
          lastTime = currTime + timeToCall
          return id
        }

      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id)
        }
    })()

    var layers = [],
      objects = [],
      world = document.getElementById('world'),
      viewport = document.getElementById('viewport'),
      d = 0,
      p = 400,
      worldXAngle = 0,
      worldYAngle = 0

    //@ts-ignore
    viewport.style.webkitPerspective = p
    //@ts-ignore
    viewport.style.MozPerspective = p
    //@ts-ignore
    viewport.style.oPerspective = p

    generate()

    function createCloud() {
      var div = document.createElement('div')
      div.className = 'cloudBase'
      var x = 256 - Math.random() * 512
      var y = 256 - Math.random() * 512
      var z = 256 - Math.random() * 512
      var t =
        'translateX( ' +
        x +
        'px ) translateY( ' +
        y +
        'px ) translateZ( ' +
        z +
        'px )'
      div.style.webkitTransform = t
      //@ts-ignore
      div.style.MozTransform = t
      //@ts-ignore
      div.style.oTransform = t
      world.appendChild(div)

      for (var j = 0; j < 5 + Math.round(Math.random() * 10); j++) {
        var cloud = document.createElement('img')
        //@ts-ignore
        cloud.style.opacity = 0
        var r = Math.random()
        var src = 'cloud.png'
        ;(function(img) {
          img.addEventListener('load', function() {
            //@ts-ignore
            img.style.opacity = 0.8
          })
        })(cloud)
        cloud.setAttribute('src', src)
        cloud.className = 'cloudLayer'

        var x = 256 - Math.random() * 512
        var y = 256 - Math.random() * 512
        var z = 100 - Math.random() * 200
        var a = Math.random() * 360
        var s = 0.25 + Math.random()
        x *= 0.2
        y *= 0.2

        //@ts-ignore
        cloud.data = {
          x: x,
          y: y,
          z: z,
          a: a,
          s: s,
          speed: 0.1 * Math.random(),
        }

        var t =
          'translateX( ' +
          x +
          'px ) translateY( ' +
          y +
          'px ) translateZ( ' +
          z +
          'px ) rotateZ( ' +
          a +
          'deg ) scale( ' +
          s +
          ' )'
        cloud.style.webkitTransform = t
        //@ts-ignore
        cloud.style.MozTransform = t
        //@ts-ignore
        cloud.style.oTransform = t

        div.appendChild(cloud)
        layers.push(cloud)
      }

      return div
    }

    window.addEventListener('mousewheel', onContainerMouseWheel)
    window.addEventListener('DOMMouseScroll', onContainerMouseWheel)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onMouseMove)

    function onMouseMove(e) {
      var x = e.clientX || e.touches[0].clientX
      var y = e.clientY || e.touches[0].clientY

      worldYAngle = -(0.5 - x / window.innerWidth) * 180
      worldXAngle = (0.5 - y / window.innerHeight) * 180
      updateView()
      event.preventDefault()
    }

    function onContainerMouseWheel(event) {
      event = event ? event : window.event
      d = d - (event.detail ? event.detail * -5 : event.wheelDelta / 8)
      updateView()
      event.preventDefault()
    }

    function generate() {
      objects = []

      if (world.hasChildNodes()) {
        while (world.childNodes.length >= 1) {
          world.removeChild(world.firstChild)
        }
      }

      for (var j = 0; j < 5; j++) {
        objects.push(createCloud())
      }
    }

    function updateView() {
      var t =
        'translateZ( ' +
        d +
        'px ) rotateX( ' +
        worldXAngle +
        'deg) rotateY( ' +
        worldYAngle +
        'deg)'
      world.style.webkitTransform = t
      //@ts-ignore
      world.style.MozTransform = t
      //@ts-ignore
      world.style.oTransform = t
    }

    function update() {
      for (var j = 0; j < layers.length; j++) {
        var layer = layers[j]
        layer.data.a += layer.data.speed
        var t =
          'translateX( ' +
          layer.data.x +
          'px ) translateY( ' +
          layer.data.y +
          'px ) translateZ( ' +
          layer.data.z +
          'px ) rotateY( ' +
          -worldYAngle +
          'deg ) rotateX( ' +
          -worldXAngle +
          'deg ) rotateZ( ' +
          layer.data.a +
          'deg ) scale( ' +
          layer.data.s +
          ')'
        layer.style.webkitTransform = t
        layer.style.MozTransform = t
        layer.style.oTransform = t
      }
      requestAnimationFrame(update)
    }

    update()
  }, [])

  return (
    <div className="mdx-hero-asset__container">
      <div id="viewport">
        <div id="world"></div>
      </div>
    </div>
  )
}
