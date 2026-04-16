import datetime
from pysolar.solar import get_altitude, get_azimuth
from pysolar.util import get_sunrise_time, get_sunset_time

class SolarReflector:
    def __init__(self, lat, lon, target_azimuth=180.0, target_altitude=0.0):
        self.lat = lat
        self.lon = lon
        self.target_azimuth = target_azimuth
        self.target_altitude = target_altitude

    def calculate_angles(self, query_time=None):
        if query_time is None:
            query_time = datetime.datetime.now(datetime.timezone.utc)
        
        sun_alt = get_altitude(self.lat, self.lon, query_time)
        raw_sun_azi = get_azimuth(self.lat, self.lon, query_time)
        sun_azi = (raw_sun_azi + 180) % 360

        diff = self.target_azimuth - sun_azi
        if abs(diff) > 180:
            if self.target_azimuth > sun_azi:
                motor_h = (sun_azi + (self.target_azimuth - 360)) / 2
            else:
                motor_h = (sun_azi + (self.target_azimuth + 360)) / 2
        else:
            motor_h = (sun_azi + self.target_azimuth) / 2
        motor_h %= 360

        motor_v = (sun_alt + self.target_altitude) / 2

        return {
            "time": query_time.isoformat(),
            "sun_alt": round(sun_alt, 2),
            "sun_azi": round(sun_azi, 2),
            "motor_h": round(motor_h, 2),
            "motor_v": round(motor_v, 2)
        }

    def get_sunrise_sunset(self, date):
        sunrise = get_sunrise_time(self.lat, self.lon, date)
        sunset = get_sunset_time(self.lat, self.lon, date)
        return {
            "sunrise": sunrise.strftime("%H:%M") if sunrise else None,
            "sunset": sunset.strftime("%H:%M") if sunset else None
        }
